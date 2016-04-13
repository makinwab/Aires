class PhotosController < ApplicationController
  def destroy
    @photo = Photo.find_by(id: params[:id])
    room = @photo.room

    @photo.destroy
    @photos = room.photos
    respond_to :js
  end
end