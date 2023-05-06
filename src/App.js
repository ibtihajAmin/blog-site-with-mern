import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          My Blog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2021/11/facebook-meta-rotate-pattern.jpg?w=1390&crop=1"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>
            Hacked verified Facebook pages impersonating Meta are buying ads
            from Meta
          </h2>
          <p className="info">
            <a className="author">David Malan</a>
            <time>2023-05-06 21:40</time>
          </p>
          <p className="summary">
            A handful of verified Facebook pages were hacked recently and
            spotted slinging likely malware through ads approved by and
            purchased through the platform. But the accounts should be easy to
            catch — in some cases, they were impersonating Facebook itself.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2021/11/facebook-meta-rotate-pattern.jpg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>
            Hacked verified Facebook pages impersonating Meta are buying ads
            from Meta
          </h2>
          <p className="info">
            <a className="author">David Vila</a>
            <time>2023-05-06 21:40</time>
          </p>
          <p className="summary">
            A handful of verified Facebook pages were hacked recently and
            spotted slinging likely malware through ads approved by and
            purchased through the platform. But the accounts should be easy to
            catch — in some cases, they were impersonating Facebook itself.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2021/11/facebook-meta-rotate-pattern.jpg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>
            Hacked verified Facebook pages impersonating Meta are buying ads
            from Meta
          </h2>
          <p className="info">
            <a className="author">Jason Malan</a>
            <time>2023-05-06 21:40</time>
          </p>
          <p className="summary">
            A handful of verified Facebook pages were hacked recently and
            spotted slinging likely malware through ads approved by and
            purchased through the platform. But the accounts should be easy to
            catch — in some cases, they were impersonating Facebook itself.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
