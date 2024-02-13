import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const DeleteJob = () => {
  return <h1>DeleteJob Page</h1>;
};
export default DeleteJob;

// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/jobs/${params.id}`);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job deleted successfully');
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    return redirect('/dashboard/all-jobs');
  };
