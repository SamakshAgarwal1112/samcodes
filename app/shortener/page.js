'use client';
import { useState, useEffect } from 'react';
import { auth, db, googleProvider } from '@/app/lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc,
  query,
  orderBy 
} from 'firebase/firestore';
import { VscLoading, VscLinkExternal, VscTrash, VscEdit, VscClose, VscLink } from 'react-icons/vsc';
import { FcGoogle } from 'react-icons/fc';

export default function Shortener() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [urls, setUrls] = useState([]);
  const [newUrl, setNewUrl] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editSlug, setEditSlug] = useState('');
  const [editUrl, setEditUrl] = useState('');

  const ALLOWED_EMAIL = process.env.NEXT_PUBLIC_ALLOWED_EMAIL || '';
  const PROTECTED_ROUTES = ['shortener', 'projects', 'experience', 'blogs', 'cp-stats', 'connect', 'api'];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.email === ALLOWED_EMAIL) {
        setUser(currentUser);
        fetchUrls();
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user.email !== ALLOWED_EMAIL) {
        await signOut(auth);
        alert('Access denied. Only authorized users can access this page.');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      alert('Failed to sign in. Please try again.');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const fetchUrls = async () => {
    try {
      const q = query(collection(db, 'urls'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const urlsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUrls(urlsList);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };

  const handleCreateShortUrl = async (e) => {
    e.preventDefault();
    
    if (!newUrl || !newSlug) {
      alert('Please fill in both URL and slug fields');
      return;
    }

    if (PROTECTED_ROUTES.includes(newSlug.toLowerCase())) {
      alert(`Slug "${newSlug}" is reserved and cannot be used.`);
      return;
    }

    if (urls.some((url) => url.slug === newSlug)) {
      alert('This slug is already in use. Please choose a different one.');
      return;
    }

    try {
      await addDoc(collection(db, 'urls'), {
        originalUrl: newUrl,
        slug: newSlug,
        createdAt: new Date().toISOString(),
        clicks: 0,
      });
      setNewUrl('');
      setNewSlug('');
      fetchUrls();
    } catch (error) {
      console.error('Error creating short URL:', error);
      alert('Failed to create short URL');
    }
  };

  const handleDeleteUrl = async (id) => {
    if (confirm('Are you sure you want to delete this URL?')) {
      try {
        await deleteDoc(doc(db, 'urls', id));
        fetchUrls();
      } catch (error) {
        console.error('Error deleting URL:', error);
        alert('Failed to delete URL');
      }
    }
  };

  const handleEditUrl = async (e) => {
    e.preventDefault();
    
    if (PROTECTED_ROUTES.includes(editSlug.toLowerCase())) {
      alert(`Slug "${editSlug}" is reserved and cannot be used.`);
      return;
    }

    if (urls.some((url) => url.slug === editSlug && url.id !== editingId)) {
      alert('This slug is already in use. Please choose a different one.');
      return;
    }

    try {
      await updateDoc(doc(db, 'urls', editingId), {
        originalUrl: editUrl,
        slug: editSlug,
      });
      setEditingId(null);
      setEditSlug('');
      setEditUrl('');
      fetchUrls();
    } catch (error) {
      console.error('Error updating URL:', error);
      alert('Failed to update URL');
    }
  };

  const copyToClipboard = (slug) => {
    navigator.clipboard.writeText(`https://samcodes.in/${slug}`);
    alert('Short URL copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <VscLoading className="animate-spin text-vscode-accent" size={48} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6" data-testid="shortener-login">
        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-8">
          <VscLink className="mx-auto text-vscode-accent mb-4" size={64} />
          <h1 className="text-3xl font-bold text-vscode-white mb-4">
            URL Shortener
          </h1>
          <p className="text-vscode-gray mb-6">
            Sign in with Google to manage your short URLs
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-3 w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded transition-colors"
            data-testid="google-signin-btn"
          >
            <FcGoogle size={24} />
            Sign in with Google
          </button>
          <p className="text-xs text-vscode-gray mt-4">
            Only authorized users can access this page
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6" data-testid="shortener-dashboard">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-vscode-white">
            URL Shortener <span className="text-vscode-green">_</span>
          </h1>
          <p className="text-vscode-gray mt-2">
            Signed in as {user.email}
          </p>
        </div>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-vscode-sidebar hover:bg-vscode-hover border border-vscode-border text-vscode-white rounded transition-colors"
          data-testid="signout-btn"
        >
          Sign Out
        </button>
      </div>

      {/* Create New Short URL */}
      <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-vscode-white mb-4">
          Create Short URL
        </h2>
        <form onSubmit={handleCreateShortUrl} className="space-y-4">
          <div>
            <label className="block text-sm text-vscode-gray mb-2">
              Original URL
            </label>
            <input
              type="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="https://example.com/very-long-url"
              className="w-full px-4 py-2 bg-vscode-bg border border-vscode-border text-vscode-white rounded focus:outline-none focus:border-vscode-accent"
              required
              data-testid="new-url-input"
            />
          </div>
          <div>
            <label className="block text-sm text-vscode-gray mb-2">
              Short Slug
            </label>
            <div className="flex items-center gap-2">
              <span className="text-vscode-gray">samcodes.in/</span>
              <input
                type="text"
                value={newSlug}
                onChange={(e) => setNewSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, ''))}
                placeholder="my-link"
                className="flex-1 px-4 py-2 bg-vscode-bg border border-vscode-border text-vscode-white rounded focus:outline-none focus:border-vscode-accent"
                required
                data-testid="new-slug-input"
              />
            </div>
            <p className="text-xs text-vscode-gray mt-1">
              Only lowercase letters, numbers, hyphens, and underscores
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-vscode-accent hover:bg-vscode-accentHover text-white px-6 py-3 rounded transition-colors font-semibold"
            data-testid="create-url-btn"
          >
            Create Short URL
          </button>
        </form>
      </div>

      {/* URLs List */}
      <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-vscode-white mb-4">
          Your Short URLs ({urls.length})
        </h2>
        {urls.length === 0 ? (
          <p className="text-vscode-gray text-center py-8">
            No short URLs yet. Create one above!
          </p>
        ) : (
          <div className="space-y-3">
            {urls.map((url) => (
              <div
                key={url.id}
                className="bg-vscode-bg border border-vscode-border rounded p-4"
                data-testid={`url-item-${url.slug}`}
              >
                {editingId === url.id ? (
                  <form onSubmit={handleEditUrl} className="space-y-3">
                    <input
                      type="url"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      className="w-full px-3 py-2 bg-vscode-sidebar border border-vscode-border text-vscode-white rounded text-sm"
                      required
                    />
                    <input
                      type="text"
                      value={editSlug}
                      onChange={(e) => setEditSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, ''))}
                      className="w-full px-3 py-2 bg-vscode-sidebar border border-vscode-border text-vscode-white rounded text-sm"
                      required
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-vscode-accent text-white rounded text-sm"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="px-4 py-2 bg-vscode-sidebar border border-vscode-border text-vscode-white rounded text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <button
                            onClick={() => copyToClipboard(url.slug)}
                            className="text-vscode-accent hover:text-vscode-accentHover font-semibold text-lg"
                            data-testid={`copy-${url.slug}`}
                          >
                            samcodes.in/{url.slug}
                          </button>
                          <VscLinkExternal className="text-vscode-gray" size={16} />
                        </div>
                        <p className="text-vscode-gray text-sm truncate">
                          {url.originalUrl}
                        </p>
                        <p className="text-vscode-gray text-xs mt-1">
                          Created: {new Date(url.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingId(url.id);
                            setEditSlug(url.slug);
                            setEditUrl(url.originalUrl);
                          }}
                          className="p-2 hover:bg-vscode-hover text-vscode-blue rounded"
                          data-testid={`edit-${url.slug}`}
                        >
                          <VscEdit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteUrl(url.id)}
                          className="p-2 hover:bg-vscode-hover text-vscode-red rounded"
                          data-testid={`delete-${url.slug}`}
                        >
                          <VscTrash size={18} />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
