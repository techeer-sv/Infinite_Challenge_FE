import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ResultItem, ResultsContainer } from "./Main";
import { ResultListType } from "../types/searchResult";
import ResultList from "../components/main/ResultList";
import useHandleModal from "../hooks/useHandleModal";
import Overlay from "../common/Overlay";
import Modal from "../common/Modal";
import NoResult from "../components/main/NoResult";
import {
  NO_FAVORITES_MESSAGE,
  NO_FAVORITES_MESSAGE_DESCRIPTION,
} from "../constants/search";
import Bookmark from "../common/Image/Bookmark";
import BookmarkBorder from "../common/Image/BookmarkBorder";

const Favorites = () => {
  const [favoritesLists, setFavoritesLists] = useState<ResultListType[]>([]);
  const { isOpen, closeModal, openModal } = useHandleModal();
  const [clickedIndex, setClickedIndex] = useState<number>(0);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favoritesData = JSON.parse(favorites);
      setFavoritesLists(favoritesData);
    }
  }, []);

  const deleteFavorites = (index: number): void => {
    const newFavorites = favoritesLists.filter((_, index2) => index2 !== index);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavoritesLists(newFavorites);
    closeModal();
  };

  return (
    <Page>
      <FavoritesLists>
        {favoritesLists?.map((list: ResultListType, index: number) => {
          return (
            <ResultItem key={list.id} index={index}>
              <ResultList
                searchResult={list}
                renderBookmark={({ isFavorites }) =>
                  isFavorites ? (
                    <Bookmark
                      onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
                        e.stopPropagation();
                        setClickedIndex(index);
                        openModal();
                      }}
                      width="16"
                      height="16"
                      cursor="pointer"
                    />
                  ) : (
                    <BookmarkBorder
                      onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
                        e.stopPropagation();
                        setClickedIndex(index);
                        openModal();
                      }}
                      width="16"
                      height="16"
                      fill="#007BE9"
                      cursor="pointer"
                    />
                  )
                }
              />
            </ResultItem>
          );
        })}
      </FavoritesLists>
      {favoritesLists.length === 0 && (
        <NoResult
          title={NO_FAVORITES_MESSAGE}
          description={NO_FAVORITES_MESSAGE_DESCRIPTION}
        />
      )}
      {isOpen && (
        <Overlay>
          <Modal
            onClick={() => deleteFavorites(clickedIndex)}
            closeModal={closeModal}
          >
            즐겨찾기에서 제거하시겠습니까?
          </Modal>
        </Overlay>
      )}
    </Page>
  );
};

export default Favorites;

const Page = styled.div``;

const FavoritesLists = styled(ResultsContainer)``;
