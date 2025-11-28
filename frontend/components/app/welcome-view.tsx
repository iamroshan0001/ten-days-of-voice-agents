import { Button } from '@/components/livekit/button';

function ShoppingBagIcon() {
  return (
    <div className="relative mb-6">
      {/* Animated glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-28 w-28 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 animate-pulse" />
      </div>
      
      {/* Shopping bag with items */}
      <div className="relative flex items-center justify-center">
        <svg className="h-20 w-20 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        {/* Floating food emojis */}
        <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🥖</div>
        <div className="absolute -bottom-1 -left-2 text-xl animate-bounce" style={{ animationDelay: '0.2s' }}>🥬</div>
      </div>
    </div>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-5h-.5a2.5 2.5 0 000 5H5zm11 0a2 2 0 104 0m-4 0a2 2 0 114 0m0 0v-5" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <section className="flex flex-col items-center justify-center text-center px-4 py-12">
        <ShoppingBagIcon />

        {/* Brand header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
            🛒 FreshMart Express
          </h1>
          <p className="text-lg text-green-700 font-medium">
            Your AI Shopping Assistant
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-4 shadow-sm">
            <div className="text-3xl mb-2">🥗</div>
            <p className="text-sm font-semibold text-green-800">Fresh Groceries</p>
            <p className="text-xs text-green-600 mt-1">Farm to table quality</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-4 shadow-sm">
            <div className="text-3xl mb-2">🍕</div>
            <p className="text-sm font-semibold text-green-800">Ready Meals</p>
            <p className="text-xs text-green-600 mt-1">Hot & delicious food</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-4 shadow-sm">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-sm font-semibold text-green-800">10-Min Delivery</p>
            <p className="text-xs text-green-600 mt-1">Lightning fast service</p>
          </div>
        </div>

        {/* Main description */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 max-w-2xl mb-8 shadow-lg">
          <p className="text-white text-lg font-medium mb-2">
            🎤 Voice-Powered Shopping Made Easy
          </p>
          <p className="text-green-100 text-sm leading-relaxed">
            Simply tell me what you need - groceries, snacks, or even "ingredients for pasta" - 
            and I'll add everything to your cart. Modify quantities, remove items, or place your order instantly!
          </p>
        </div>

        {/* Start button */}
        <Button 
          variant="primary" 
          size="lg" 
          onClick={onStartCall} 
          className="w-80 font-bold text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-xl shadow-green-900/30 mb-6"
        >
          {startButtonText}
        </Button>

        {/* Trust indicators */}
        <div className="flex items-center gap-8 text-xs text-green-700 mb-4">
          <div className="flex items-center gap-2">
            <TruckIcon className="h-5 w-5 text-green-600" />
            <span className="font-medium">Free Delivery on ₹199+</span>
          </div>
          <div className="flex items-center gap-2">
            <SparklesIcon className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">Smart Cart Management</span>
          </div>
        </div>

        {/* Popular items preview */}
        <div className="mt-6 bg-white/60 backdrop-blur-sm border border-green-200 rounded-xl p-4 max-w-md">
          <p className="text-xs font-semibold text-green-800 mb-2">🔥 Popular Today</p>
          <div className="flex justify-center gap-3 text-2xl">
            <span>🥛</span>
            <span>🍞</span>
            <span>🥚</span>
            <span>🧀</span>
            <span>🍅</span>
            <span>🥑</span>
          </div>
        </div>
      </section>

    </div>
  );
};