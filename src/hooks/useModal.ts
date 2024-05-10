import { SearchItemType } from "@/types/searchItemType";
import { useState } from "react";

interface ModalProps {
  searchItem: SearchItemType;
  setBookmarks: React.Dispatch<React.SetStateAction<SearchItemType[]>>;
}

export default function useModal({ searchItem, setBookmarks }: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const deleteBookmark = () => {
    const currentBookmarks = JSON.parse(localStorage.getItem("bookmarksData") || "[]");
    const newBookmarks = currentBookmarks.filter(
      (bookmark: SearchItemType) => bookmark.id !== searchItem.id
    );
    localStorage.setItem("bookmarksData", JSON.stringify(newBookmarks));
    setBookmarks([...newBookmarks]);
    closeModal();
  };

  return { isOpen, openModal, closeModal, deleteBookmark };
}
