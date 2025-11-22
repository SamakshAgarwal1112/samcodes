import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'Samaksh1112';
    
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            ranking
            reputation
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
        userContestRanking(username: $username) {
          attendedContestsCount
          rating
          globalRanking
          topPercentage
        }
      }
    `;

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode data');
    }

    const data = await response.json();
    
    const problemsSolved = data.data?.matchedUser?.submitStats?.acSubmissionNum?.find(
      (item) => item.difficulty === 'All'
    )?.count || 0;

    const contestRating = Math.floor(data.data?.userContestRanking?.rating || 0);

    return NextResponse.json({
      username,
      rating: contestRating > 0 ? contestRating : 'Unrated',
      maxRating: contestRating > 0 ? contestRating : 'N/A',
      problemsSolved,
      contestsRating: data.data?.userContestRanking?.attendedContestsCount || 0,
    });
  } catch (error) {
    console.error('LeetCode API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch LeetCode stats' },
      { status: 500 }
    );
  }
}
