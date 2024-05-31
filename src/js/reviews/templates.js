export function userTemplate(user) {
  return `
        <li id='reviews__item' class="swiper-slide ">
        <img class="reviews__img" src="${user.avatar_url}" alt="${user._id}" />
        <h5 class="reviews__caption">${user.author}</h5>
        <p class="reviews__text">${user.review}</p>
        </li>`;
}

export function usersTemplate(users) {
  return users.map(userTemplate).join('');
}
