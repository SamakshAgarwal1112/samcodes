import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'samakshagarwal11';
    
    const response = await fetch(
      `https://codeforces.com/api/user.info?handles=${username}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Codeforces data');
    }

    const data = await response.json();
    
    if (data.status !== 'OK' || !data.result || data.result.length === 0) {
      throw new Error('Invalid Codeforces response');
    }

    const user = data.result[0];

    return NextResponse.json({
      username,
      rating: user.rating || 'Unrated',
      maxRating: user.maxRating || 'N/A',
      title: user.rank || null,
    });
  } catch (error) {
    console.error('Codeforces API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Codeforces stats' },
      { status: 500 }
    );
  }
}
