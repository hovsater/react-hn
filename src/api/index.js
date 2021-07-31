const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

export const getStory = async (id) => {
  const response = await fetch(`${BASE_URL}/item/${id}.json`)
  const story = response.json()

  return story
}

export const getTopStories = async () => {
  const response = await fetch(`${BASE_URL}/topstories.json`)
  const storyIds = await response.json()
  const stories = await Promise.all(storyIds.slice(0, 30).map(id => getStory(id)))

  return stories
}