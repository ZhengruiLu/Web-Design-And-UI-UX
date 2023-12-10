import './App.css';

function Cat() {
  return (
    <main id="main">
    <div className="card-container">
    <div className="container">
      <div className="text">
        <h2>Time it Right, Then Invite</h2>
        <p>
          Cats are crepuscular creatures, meaning they are the most active at dawn and dusk, so plan to schedule your party accordingly.
          </p>
          <p>
            Guests can include cats, small dogs your cat knows well, and, of course, their people. 
          </p>
          <p>
            Keep in mind your final headcount may be lower than what you expect. 
          </p>
      </div>
      <div className="image">
        <img className="text-image" src="image/cat1.jpg" alt="cat1"/>
      </div>
    </div>

    <div className="container2">
      <div className="image2">
        <img className="text-image" src="image/cat2.jpg" alt="cat2"/>
      </div>
      <div className="text2">
        <h2>Make it Festive</h2>
        <p>
          Maybe hang a fun “Happy Birthday” sign for your birthday cat. And don't forget the goody bags! 
        </p>
          <p>
            Small bags of treats, or individual bags you make up yourself with zip-top snack-size bags, are easy and sure to be appreciated by your cat’s furry friends.                 </p>
          <p>
            And don't forget a favor for each guest's person! Morgan suggests cat-print socks, costume jewelry featuring cats, or a cat key chain.                
          </p>
      </div>
    </div>
    </div>
  </main>
  );
}

export default Cat;