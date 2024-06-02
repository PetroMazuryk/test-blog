import { useParams } from 'react-router-dom';
import { Post } from '../components/Post/Post';
import { Index } from '../components/AddComment/AddComment';
import { CommentsBlock } from '../components/CommentsBlock';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:4444/api/posts/${id}`)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        alert('Помилка при отриманні статті');
      });
  });

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }
  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        <p>{data.text}</p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: 'Jastin Wilson',
              avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
            },
            text: 'Це текстовий коментарій ',
          },
          {
            user: {
              fullName: 'Michael Martin',
              avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
            },
            text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};

export default FullPost;
