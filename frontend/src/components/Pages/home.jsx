import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container1" style={{ backgroundColor: "#A4C4B5" }}>
        <div class="row1">
          <div class="imgWrapper">
            <img src="../images/book.jpeg" alt="" />
          </div>
          <div class="contentWrapper">
            <div class="content">
              <span class="textWrapper">
                <span></span>Arbyte Solutions
              </span>
              <h2>Teachers die, but books live on.</h2>
              <p>
                Books are teachers as they teach us wisdom of thousands of
                years. Teachers come and go, but books carry on. That’s why we
                can still access wisdom of greats such as Aristotle, Seneca, and
                Socrates nearly two thousand years after they walked on this
                planet. Your learning deepens when you re-read a book. You’ll
                inevitably miss few things in the first read, most of which
                you’ll grasp in the second. This, by the way, doesn’t take into
                account the silent digestion of and reflection on the content
                happening between the two readings. A book must be read,
                re-read, and reflected upon in the light of your and others’
                experiences to gain in-depth understanding of the subject. A bad
                book steals away your time because you hardly learn anything. If
                you come across such a book don’t finish it. Word count doesn’t
                matter. What matters is how effective they’re. With low
                attention spans in the digital world, people don’t have the
                patience to read unnecessary stuff in your emails and other
                communications. Therefore, communication should be as succinct
                and to-the-point as possible. Books are a collection of wisdom
                accumulated over thousands of years. Little wonder, they will
                provide solution to your suffering. Moreover, books can distract
                you from the troubling present.
              </p>
              <a href="/dfd">Return Book</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flexbox">
        <h1>Reviews</h1>
        <div className="container2">
          <div className="row2">
            <div className="card1">
              <img src="../images/image1.webp" alt="image1" />
              <h4>John Doe</h4>
              <p>
                User feedback refers to all the quantitative as well as
                qualitative information gathered from customers that highlights
                their experience. It includes what they like and don’t like, how
                they think about a product, and what they want. It’s very
                important for businesses that want to make changes based on what
                their customers want to get user feedback from them. It should
                be kept in mind that user feedback may differ from customer to
                customer so a business needs to be able to identify trends and
                patterns to make informed decisions.
              </p>
            </div>
            <div className="card1">
              <img src="../images/image2.webp" alt="image1" />
              <h4>John Doe</h4>
              <p>
                User feedback refers to all the quantitative as well as
                qualitative information gathered from customers that highlights
                their experience. It includes what they like and don’t like, how
                they think about a product, and what they want. It’s very
                important for businesses that want to make changes based on what
                their customers want to get user feedback from them. It should
                be kept in mind that user feedback may differ from customer to
                customer so a business needs to be able to identify trends and
                patterns to make informed decisions.
              </p>
            </div>
            <div className="card1">
              <img src="../images/image3.jpeg" alt="image1" />
              <h4>John Doe</h4>
              <p>
                User feedback refers to all the quantitative as well as
                qualitative information gathered from customers that highlights
                their experience. It includes what they like and don’t like, how
                they think about a product, and what they want. It’s very
                important for businesses that want to make changes based on what
                their customers want to get user feedback from them. It should
                be kept in mind that user feedback may differ from customer to
                customer so a business needs to be able to identify trends and
                patterns to make informed decisions.
              </p>
            </div>
            <div className="card1">
              <img src="../images/image3.jpeg" alt="image1" />
              <h4>John Doe</h4>
              <p>
                User feedback refers to all the quantitative as well as
                qualitative information gathered from customers that highlights
                their experience. It includes what they like and don’t like, how
                they think about a product, and what they want. It’s very
                important for businesses that want to make changes based on what
                their customers want to get user feedback from them. It should
                be kept in mind that user feedback may differ from customer to
                customer so a business needs to be able to identify trends and
                patterns to make informed decisions.
              </p>
            </div>
            <div className="card1">
              <img src="../images/image3.jpeg" alt="image1" />
              <h4>John Doe</h4>
              <p>
                User feedback refers to all the quantitative as well as
                qualitative information gathered from customers that highlights
                their experience. It includes what they like and don’t like, how
                they think about a product, and what they want. It’s very
                important for businesses that want to make changes based on what
                their customers want to get user feedback from them. It should
                be kept in mind that user feedback may differ from customer to
                customer so a business needs to be able to identify trends and
                patterns to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
