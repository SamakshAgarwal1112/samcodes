import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const username = 'samaksh1112';
    
    const response = await fetch(
      `https://www.codechef.com/users/${username}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch CodeChef data');
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const ratingText = $('.rating-number').first().text().trim();
    const rating = parseInt(ratingText) || 'Unrated';

    const highestRatingText = $('.rating-header .rating-number').eq(1).text().trim();
    const maxRating = parseInt(highestRatingText) || rating;

    const stars = $('.rating-star span').length;
    let title = null;
    if (stars > 0) {
      title = `${stars} Star`;
    }

    return NextResponse.json({
      username,
      rating: rating !== 'Unrated' ? rating : 'Unrated',
      maxRating: maxRating !== 'Unrated' ? maxRating : 'N/A',
      title,
    });
  } catch (error) {
    console.error('CodeChef Scraping Error:', error);
    return NextResponse.json({
      username: 'samaksh1112',
      rating: 'N/A',
      maxRating: 'N/A',
      title: null,
    });
  }
}
