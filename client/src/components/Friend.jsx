import { Typography } from "@mui/material";

const Friend = ({ friendId, name, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector(state => state.user);
  const token = useSelector(state => state.token);
  const friends = useSelector(state => state.user.friends);

  return (
    <FlexBetween>
      <UserImage />
      <Box>
        <Typography>{name}</Typography>
      </Box>
    </FlexBetween>
  );
};

export default Friend;
