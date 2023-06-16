import { useParams } from "react-router-dom";
import EditUserForm from "./EditUserForm";
import { useGetUsersQuery } from "./usersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";
import useTitle from "../../hooks/useTitle";

const EditUser = () => {
  useTitle("techNotes: Edit User");

  const { id } = useParams();

  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });

  /**
   * We are making sure that we have data before populating the form
   */
  if (!user) return <PulseLoader color={"#FFF"} />;

  const content = <EditUserForm user={user} />;

  return content;
};

export default EditUser;
