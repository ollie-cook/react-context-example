import ServerComponent from './components/ServerComponent'
import Controls from './components/Controls'
import Output from './components/Output'
import BgColourProvider from './components/BgColourContext'
import { inconsolata }  from './fonts'

export default function Home() {
  return ( 
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-400">
      <div className="absolute top-4 w-[50rem]">
        <h1 className="text-6xl font-bold text-center">React Context Example</h1>
        <p className={`text-center mt-2 ${inconsolata.className}`}>I used React Context to create this very simple example. It renders two client components from within a server component, and uses React Context to give both client components access to a shared state, i.e. the background colour.</p>
      </div>
      <BgColourProvider>
        <ServerComponent>
          <Controls />
          <Output />
        </ServerComponent>
      </BgColourProvider>
      <p className={`absolute bottom-1 left-2 text-white ${inconsolata.className}`}>Server Component</p>
    </main>
  );
}
