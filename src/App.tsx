import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/searchBar/SearchBar";
import { useState, useEffect } from "react";
import fetchImages from "./services/api";
import ImageGallery from "./components/imageGallery/ImageGallery";
import LoadMore from "./components/loadMore/LoadMore";
import Loader from "./components/loader/Loader";
import ImageModal from "./components/imageModal/ImageModal";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import Image from "./types/image";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(12);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await fetchImages(query, page);
        if (data.length === 0) {
          toast.error("No images found for this request!", {
            style: {
              background: "rgb(245, 208, 167)",
              color: "black",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
            },
            position: "top-right",
          });
        }
        setImages((image) => [...image, ...data]);
      } catch {
        setIsError(true);
        toast.error("There was an error loading images, please try again later...", {
          style: {
            background: "rgb(245, 208, 167)",
            color: "black",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "10px",
          },
          position: "top-right",
        });
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page, perPage]);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (newQuery: string) => {
    console.log(newQuery);
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleReset = () => {
    setImages([]);
    setPage(1);
    toast.success(`All filters and pages drop to init values`);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar handleSetQuery={handleSetQuery} reset={handleReset} />
      {!isError ? (
        <ImageGallery images={images} onImageClick={openModal} />
      ) : (
        <ErrorMessage />
      )}
      <Loader loading={isLoading} />
      {images.length > 0 && !isLoading && !isError && (
        <LoadMore handleClick={handleClick} />
      )}

      <Toaster />
      <ImageModal isOpen={modalIsOpen} imageUrl={selectedImage || ""} onRequestClose={closeModal} />
    </>
  );
};

export default App;