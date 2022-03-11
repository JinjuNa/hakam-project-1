import FeedItem from './components/FeedItem'
import './App.css'

function App() {
  const feedData = [
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884__340.jpg',
      tags: [
        'Clouds',
        'Sky',
        'Atmosphere'
      ],
      likeCount: 31,
      commentCount: 8
    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584__340.jpg',
      tags: [
        'Daffodil',
        'Flower',
        'Spring'
      ],
      likeCount: 36,
      commentCount: 7
    },
    {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2020/09/26/07/05/sea-5603351__340.jpg',
      tags: [
        'Sea',
        'Ocean',
        'Rocks'
      ],
      likeCount: 31,
      commentCount: 8
    },
    {
      id: 4,
      image: 'https://cdn.pixabay.com/photo/2022/03/01/20/58/peace-genius-7042013__340.jpg',
      tags: [
        'Peace Genius',
        'Peace Angel',
        'Munich'
      ],
      likeCount: 16,
      commentCount: 8
    },
    {
      id: 5,
      image: 'https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg',
      tags: [
        'Sea',
        'Rainbow',
        'Rainfall'
      ],
      likeCount: 31,
      commentCount: 5
    },
    {
      id: 6,
      image: 'https://cdn.pixabay.com/photo/2017/06/05/07/58/butterfly-2373175__340.png',
      tags: [
        'Butterfly',
        'Blue',
        'Fun'
      ],
      likeCount: 31,
      commentCount: 8
    },
    {
      id: 7,
      image: 'https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122__340.jpg',
      tags: [
        'Lemonade',
        'Ice',
        'Lemon'
      ],
      likeCount: 31,
      commentCount: 8
    },
    {
      id: 8,
      image: 'https://cdn.pixabay.com/photo/2022/03/02/13/42/peace-7043225__340.jpg',
      tags: [
        'Peace',
        'Symbol',
        'Petals'
      ],
      likeCount: 27,
      commentCount: 12
    }
  ]
  return (
    <div className="App">
      <h1>Image Feed</h1>
      {
        feedData.map((item, index) => <FeedItem data={item} key={index} />)
      }
    </div>
  );
}

export default App;
