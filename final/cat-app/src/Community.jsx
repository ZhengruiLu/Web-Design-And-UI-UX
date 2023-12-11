import { useState } from 'react';
import './community.css';

const Community = () => {
  const [selectedCounty, setSelectedCounty] = useState('All');

  const users = [
    {
      id: 1,
      name: 'Alice',
      county: 'Seattle',
      profilePhoto: '/image/user1.jpg',
      intro: "Hi, I'm Alice! I live in Seattle with my adorable tabby cat, Whiskers. I'm a software engineer, and I love hiking and exploring new cafes. I'm looking to connect with fellow cat lovers in the Seattle area.",
      email: 'alice@example.com',
    },
    {
      id: 2,
      name: 'Bob',
      county: 'Bellevue',
      profilePhoto: '/image/user2.jpg',
      intro: "Hey there! I'm Bob, residing in Bellevue. My Siamese cat, Mocha, is my pride and joy. By day, I'm a graphic designer, and by night, I enjoy playing board games. Let's connect and share cat stories!",
      email: 'bob@example.com',
    },
    {
        id: 3,
        name: 'Mark',
        county: 'Redmond',
        profilePhoto: '/image/user3.jpg',
        intro: "Hello! I'm Charlie, a Redmond resident. My fluffy Persian cat, Snowball, is the center of my world. I work as a chef and enjoy experimenting with cat-friendly recipes. Let's chat about our favorite feline companions!",
        email: 'mark@example.com',
      }
  ];

  const filteredUsers = selectedCounty === 'All' ? users : users.filter(user => user.county === selectedCounty);

  return (
    <main id="main">
      <h2 className="main__title">Community</h2>

      {/* Filter Section */}
      <div>
        <label htmlFor="countyFilter">Filter by County:</label>
        <select
          id="countyFilter"
          onChange={(e) => setSelectedCounty(e.target.value)}
          value={selectedCounty}
        >
          <option value="All">All</option>
          <option value="Seattle">Seattle</option>
          <option value="Bellevue">Bellevue</option>
          <option value="Redmond">Redmond</option>
          {/* Add more county options */}
        </select>
      </div>

      {/* Users List */}
      <ul className="user-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user-item">
            <div className='user-area'>
                <div className='user-area-profile-name center'>
                    <img className='user-img' src={user.profilePhoto} alt={`Profile of ${user.name}`} />
                    <h3>{user.name}</h3>
                </div>
                <div className='user-intro'>
                    <p>{user.intro}</p>
                    <p className='left-right'><i className="gg-mail-open margin-left"></i>
                    {user.email}</p>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Community;
