import { Card } from '@mohammedaffan/react-flip-card'
import "@mohammedaffan/react-flip-card/index.css"
import FrontDiv from './FrontDiv.jsx'
import BackDiv from './BackDiv.jsx'
function App() {
  const cardValues = [
    { animationType: 'flip', direction: ['horizontal', 'vertical'] },
    { animationType: 'slide', direction: ['leftToRight', 'rightToLeft', 'up', 'down'] },
    { animationType: 'fade', direction: [''] }
  ]
  return (
    <div className='w-full h-full bg-gray-800 py-1 p-7'>
      <h1 className='text-white text-2xl md:text-4xl text-center  font-bold'>Demo for @mohammedaffan/react-flip-card</h1>
      <p className='text-center text-white mb-3'>*Hover on eact of the card to get particular animation style</p>
      <p className='text-center text-white mb-3'>Note : There is also props for every animationType's duration of transition ie, flipDuration , slideDuration and fadeDuration</p>

      {cardValues.map((item, ind) => (
        <div className='flex flex-col mb-4 border-b border-b-white ' key={ind}>
          <h3 className='text-white font-semibold text-xl md:text-3xl mb-3 '>{item.animationType.toUpperCase()}</h3>
          <div className='flex gap-10 flex-col md:flex-row flex-wrap mb-4'>
            {item.direction.map((dir, ind) => (
              <div className='flex flex-col gap-1'>
                {item.animationType === 'fade' ? <p className='text-white'>The fade has only fadeDuration props , its just fade so theres no particular style.</p>
                  : <p className='text-white'>{item.animationType}Direction={dir}</p>
                }

                <Card animationType={item.animationType} frontCard={<FrontDiv />} backCard={<BackDiv />} flipDirection={dir} slideDirection={dir} className='max-w-2xl sm:w-80 h-60' />
              </div>
            ))}
          </div>
        </div>
      ))}




    </div>
  )
}

export default App
