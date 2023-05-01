import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector(state => state.user);
  const token = useSelector(state => state.token);
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <WidgetWrapper>
      <FlexBetween>
        {/* users img */}
        <UserImage image={picturePath} />
        {/* post text */}
        <InputBase
          placeholder="What's on your mind..."
          onChange={e => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.medium,
            borderRadius: "1rem",
            padding: "1rem 3rem",
          }}
        />
        {/* if image, see dropzone */}
        {isImage && <Dropzone acceptedFiles=".jpg,.png"></Dropzone>}
      </FlexBetween>

      <FlexBetween>Image</FlexBetween>
      {/* post upload options */}
      <Button
        onClick={handlePost}
        sx={{
          color: palette.background.alt,
          backgroundColor: palette.primary.main,
        }}
      >
        POST
      </Button>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
