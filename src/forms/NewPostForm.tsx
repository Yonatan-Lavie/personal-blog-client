import React, { useState } from 'react';
import { isFieldEmpty, isValidImageURL } from '../utils/validation/validationUtils';
import { NewPostFormData } from '../utils/types';
import { createNewPost } from '../features/posts/postsThunks';

const NewPostForm: React.FC = () => {
  const [formData, setFormData] = useState<NewPostFormData>({
    title: '',
    content: '',
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form data before submitting
    if (isFieldEmpty(formData.title)) {
      // Handle empty title
      console.error('Title is required.');
      return;
    }

    if (isFieldEmpty(formData.content)) {
      // Handle empty content
      console.error('Content is required.');
      return;
    }

    if (formData.imageUrl && !isValidImageURL(formData.imageUrl)) {
      // Handle invalid image URL format
      console.error('Invalid image URL format.');
      return;
    }

    try {
      // Call the createNewPost function from API services to create a new post
      await createNewPost(formData);
      // Redirect to the home page or any other page after successful post creation
      // history.push('/');
    } catch (error) {
      // Handle post creation errors
      console.error('Error creating a new post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for id, title, date, author, content, imageUrl, and excerpt */}
      <input type="text" name="title" value={formData.title} onChange={handleChange} />
      <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
      <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;
