import renderCard from './render-card';
import renderPage from './render-page';
import Notiflix from 'notiflix';
async function fetchByAuthor(nameEvent) {
  try {
    const responce = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${nameEvent}&source=Ticketmaster&apikey=iy4jLWk8h3FEKwR9yFh4EdYPL6zmAm9o`,
    );
    const infoAuthor = await responce.json();
    // console.log(infoAuthor);
    renderCard(infoAuthor._embedded.events);
    renderPage(Math.min(50, infoAuthor.page.totalPages), infoAuthor._links.self.href);
    setTimeout(() => {
      Notiflix.Notify.success(' 👏 More EVENTS for this AUTHOR!');
    }, 300);
  } catch (error) {
    setTimeout(() => {
      Notiflix.Notify.failure('Sorry, NOT Today ....  🥺');
    }, 300);
    error.message;
  }
}

export default fetchByAuthor;
