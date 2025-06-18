"use client";

import {useEffect, useState} from "react";
import {Comment} from "@/types/article";
import {useAuth} from "@/contexts/AuthContext";

interface CommentFormProps {
  articleSlug: string;
  onCommentAdded: (comment: Comment) => void;
  onCancel: () => void;
}

export default function CommentForm({ onCommentAdded, onCancel }: Omit<CommentFormProps, 'articleSlug'>) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {user} = useAuth();

  useEffect(() => {
    if (user) {
      setAuthor(user.name || "");
    } else {
      setAuthor("");
    }
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!author.trim() || !content.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate adding a comment (in a real project, this would be an API call)
      const newComment: Comment = {
        id: Date.now(), // Generate unique ID
        author: author.trim(),
        content: content.trim(),
        date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
      };

      // Call the callback function to add the comment
      onCommentAdded(newComment);

      // Reset the form
      setAuthor("");
      setContent("");
      
      // Close the form
      onCancel();
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Error adding comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Add a comment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
            Your name *
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-transparent"
            placeholder="Enter your name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Your comment *
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-transparent resize-none"
            placeholder="Share your thoughts..."
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#FFD600] hover:bg-[#E6C200] disabled:bg-gray-300 text-black font-bold py-2 px-6 rounded-md transition-colors duration-200"
          >
            {isSubmitting ? "Publishing..." : "Publish"}
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-md transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
} 