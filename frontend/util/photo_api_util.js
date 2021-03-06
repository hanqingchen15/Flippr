export const fetchPhotos = () => (
  $.ajax({
    method: "GET",
    url: "api/photos"
  })
);

export const fetchPhoto = (id) => (
  $.ajax({
    method: "GET",
    url: `api/photos/${id}`
  })
);

export const fetchUserPhotos = (ownerId) => (
  $.ajax({
    method: "GET",
    url: `api/photos`,
    data: { owner_id: ownerId }
  })
);

export const createPhoto = (photo) => (
  $.ajax({
    method: "POST",
    url: "api/photos",
    data: photo,
    contentType: false,
    processData: false
  })
);

export const updatePhoto = (photo, id) => (
  $.ajax({
    method: "PATCH",
    url: `api/photos/${id}`,
    data: photo,
    contentType: false,
    processData: false
  })
);

export const deletePhoto = (photoId) => (
  $.ajax({
    method: "DELETE",
    url: `api/photos/${photoId}`
  })
);
