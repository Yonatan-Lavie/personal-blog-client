import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { isFieldEmpty } from '../utils/validation/validationUtils';
import { postNewComment } from '../features/comments/commentsThunks';
import { NewCommentFormData } from '../utils/types';



interface NewCommentFormProps {
  postId: string; // The ID of the post to add the comment to
}

const NewCommentForm: React.FC<NewCommentFormProps> = ({ postId }) => {
  // const history = useHistory();
  const [formData, setFormData] = useState<NewCommentFormData>({
    text: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form data before submitting
    if (isFieldEmpty(formData.text)) {
      // Handle empty comment text
      console.error('Comment text is required.');
      return;
    }

    try {
      // Call the addNewComment function from API services to add a new comment
      await postNewComment(formData, postId);
      // Redirect to the post details page or any other page after successful comment submission
      // history.push(`/posts/${postId}`);
    } catch (error) {
      // Handle comment submission errors
      console.error('Error adding a new comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Textarea for comment text */}
      <textarea name="text" value={formData.text} onChange={handleChange}></textarea>

      {/* Submit button */}
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default NewCommentForm;
