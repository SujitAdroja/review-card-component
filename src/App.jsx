import Review from './Review'
import './index.css'

export default function App(){

  return <>
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  </>
}