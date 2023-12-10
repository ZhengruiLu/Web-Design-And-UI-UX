import './App.css';

function Charity() {
  return (
    <main id="main">
      <div className="card-container">
        <div className="container">
          <div className="text">
            <h2>Support Homeless Cats</h2>
            <p>
              Cats face homelessness and harsh conditions every day. Your cat's birthday celebration can make a difference. For every order you place, we pledge to donate $1 to non-profit organizations dedicated to helping homeless cats find loving homes.
            </p>
            <p>
              Join us in making a positive impact on the lives of these furry friends. Together, we can provide shelter, food, and medical care for cats in need.
            </p>
          </div>
          <div className="image">
            <img className="text-image" src="image/cat1.jpg" alt="cat1" />
          </div>
        </div>

        <div className="container2">
          <div className="image2">
            <img className="text-image" src="image/cat2.jpg" alt="cat2" />
          </div>
          <div className="text2">
            <h2>Make a Difference</h2>
            <p>
              Your contribution doesn't stop with a memorable celebration for your cat. It extends to making a difference in the lives of cats facing health challenges. We collaborate with non-profit organizations to support research and treatment for cat diseases.
            </p>
            <p>
              Every order you place contributes to our donation fund, helping fund medical research and providing care for cats battling diseases. Together, let's make a positive impact on feline health.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Charity;
