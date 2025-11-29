import { Button } from '@/components/livekit/button';

function DragonIcon() {
  return (
    <div className="relative mb-8">
      {/* Mystical glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-32 rounded-full bg-gradient-to-r from-purple-600/40 via-red-600/40 to-orange-600/40 animate-pulse" />
      </div>
      
      {/* Dragon silhouette with floating particles */}
      <div className="relative flex items-center justify-center">
        <svg className="h-24 w-24 text-red-600 drop-shadow-2xl" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          <path d="M12 4c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zm-5 5c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1s1-.4 1-1v-3c0-.6-.4-1-1-1zm10 0c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1s1-.4 1-1v-3c0-.6-.4-1-1-1z"/>
        </svg>
        {/* Floating magic particles */}
        <div className="absolute -top-3 -right-3 text-2xl animate-bounce">✨</div>
        <div className="absolute -bottom-2 -left-3 text-xl animate-bounce" style={{ animationDelay: '0.3s' }}>🔥</div>
        <div className="absolute top-0 left-8 text-lg animate-bounce" style={{ animationDelay: '0.6s' }}>⚔️</div>
      </div>
    </div>
  );
}

function ScrollIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function DiceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12">
        <DragonIcon />

        {/* Main title with fantasy styling */}
        <div className="mb-6">
          <div className="text-sm uppercase tracking-widest text-purple-400 mb-2 font-semibold">
            ⚔️ Welcome Adventurer ⚔️
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent mb-3 drop-shadow-lg">
            Voice Game Master
          </h1>
          <p className="text-xl text-purple-300 font-medieval">
            Interactive D&D-Style Adventure
          </p>
        </div>

        {/* Story introduction */}
        <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 border-2 border-amber-600/50 rounded-lg p-6 max-w-2xl mb-8 backdrop-blur-sm shadow-2xl">
          <div className="flex items-start gap-3 mb-3">
            <ScrollIcon className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="text-amber-100 text-sm leading-relaxed mb-3">
                <span className="text-amber-300 font-semibold">The realm awaits your command...</span>
              </p>
              <p className="text-amber-200 text-sm leading-relaxed">
                Your AI Game Master will guide you through an epic voice-powered adventure. 
                Make choices, battle enemies, solve mysteries, and shape your destiny through the power of your voice.
              </p>
            </div>
          </div>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mb-8">
          <div className="bg-purple-900/50 border border-purple-600/50 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl mb-2">🎭</div>
            <p className="text-sm font-semibold text-purple-200">Dynamic Storytelling</p>
            <p className="text-xs text-purple-400 mt-1">AI-driven narrative</p>
          </div>
          
          <div className="bg-red-900/50 border border-red-600/50 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl mb-2">⚔️</div>
            <p className="text-sm font-semibold text-red-200">Voice Combat</p>
            <p className="text-xs text-red-400 mt-1">Speak your actions</p>
          </div>
          
          <div className="bg-amber-900/50 border border-amber-600/50 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl mb-2">📜</div>
            <p className="text-sm font-semibold text-amber-200">Your Choices Matter</p>
            <p className="text-xs text-amber-400 mt-1">Shape the story</p>
          </div>
        </div>

        {/* Epic start button */}
        <div className="mb-6">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={onStartCall} 
            className="w-96 font-bold text-xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 shadow-2xl shadow-orange-900/50 border-2 border-amber-500 transition-all duration-300 hover:scale-105"
          >
            {startButtonText}
          </Button>
          <p className="text-purple-400 text-xs mt-3 italic">
            "Roll for initiative..." 🎲
          </p>
        </div>


      </section>

    
    </div>
  );
};