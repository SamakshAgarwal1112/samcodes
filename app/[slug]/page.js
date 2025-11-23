import { redirect } from 'next/navigation';
import { db } from '@/app/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default async function SlugRedirect({ params }) {
  const { slug } = params;

  // Protected routes that should not be redirected
  const PROTECTED_ROUTES = ['shortener', 'projects', 'experience', 'blogs', 'cp-stats', 'connect', 'api'];
  
  if (PROTECTED_ROUTES.includes(slug)) {
    redirect('/');
  }

  try {
    // Query Firestore for the slug
    const q = query(collection(db, 'urls'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const urlDoc = querySnapshot.docs[0];
      const originalUrl = urlDoc.data().originalUrl;
      
      // Redirect to the original URL
      redirect(originalUrl);
    } else {
      // Slug not found, redirect to home
      redirect('/');
    }
  } catch (error) {
    console.error('Error fetching slug:', error);
    redirect('/');
  }
}
