// I decided to change Fichero.json to Fichero.js, because it's more easy to work with.

// Your image was not Loading because you forget to import Images.
// Always when we are working with React, we need to Import images, and not use their directory.
import avatarMark from './images/avatar-mark-webber.webp'
import avatarAngela from './images/avatar-angela-gray.webp'
import avatarJacob from './images/avatar-jacob-thompson.webp'
import avatarRizky from './images/avatar-rizky-hasanuddin.webp'
import avatarKimberly from './images/avatar-kimberly-smith.webp'
import avatarNathan from './images/avatar-nathan-peterson.webp'
import avatarAnna from './images/avatar-anna-kim.webp'

// We need to export this as module, so we can use in another place.
export const userList = [
    {
      name: "Mark Webber",
      post: "reacted to your recent post",
      reaction: " My first tournament today!",
      time: " 1m ago",
      notification: true,
      avatar: avatarMark
    },
    {
      name: "Angela Gray",
      post: "",
      reaction: "followed you!",
      time: " 5m ago",
      notification: true,
      avatar: avatarAngela
    },
    {
      name: "Jacob Thompson ",
      post: "has joined your group ",
      reaction: "Chess Club",
      time: " 1 day ago",
      notification: false,
      avatar: avatarJacob
    },
    {
      name: "Rizky Hasanuddin",
      post: "has joined your group ",
      reaction: "Chess Club ",
      time: " 5 days ago",
      notification: true,
      avatar: avatarRizky,
      message: " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },

    {
      name: "Kimberly Smith ",
      post: "commented on your picture ",
      reaction: "",
      time: "1 week ago",
      notification: false,
      avatar: avatarKimberly,
      imgChest: "src/assets/images/image-chess.webp"
    },
    {
      name: "Nathan Peterson ",
      post: "reacted to your recent post 5 ",
      reaction: "",
      time: " 2 weeks ago",
      notification: true,
      avatar: avatarNathan
    },
    {
      name: "Anna Kim",
      post: "left the group",
      reaction: "Chess Club ",
      time: " 2 weeks ago",
      notification: true,
      avatar: avatarAnna
    }
  ]