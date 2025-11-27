import { Button } from '@/components/livekit/button';

function FraudAlertIcon() {
  return (
    <div className="relative mb-6">
      {/* Pulsing background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-24 rounded-full bg-red-500/20 animate-pulse" />
      </div>
      
      {/* Shield with alert icon (pure SVG) */}
      <div className="relative flex items-center justify-center">
        <svg 
          className="h-16 w-16 text-red-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
          />
        </svg>
      </div>
    </div>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="flex flex-col items-center justify-center text-center px-4 py-12">
        <FraudAlertIcon />

        {/* Bank header */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            🏦 SecureBank Fraud Alert
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <LockIcon className="h-4 w-4" />
            <span>Automated Fraud Detection System</span>
          </div>
        </div>

        {/* Alert message */}
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 max-w-md mb-6">
          <p className="text-red-200 text-sm leading-relaxed">
            <strong className="text-red-400">⚠️ Suspicious Activity Detected</strong>
            <br />
            Our system has flagged unusual transactions on your account. 
            Please verify your recent activity.
          </p>
        </div>

        {/* Main description */}
        <p className="text-slate-300 max-w-prose leading-6 mb-2">
          Connect with our AI fraud specialist to review your account
        </p>
        <p className="text-slate-500 text-sm mb-8">
          This call is secure and encrypted • Available 24/7
        </p>

        {/* Start button */}
        <Button 
          variant="primary" 
          size="lg" 
          onClick={onStartCall} 
          className="w-72 font-semibold text-lg bg-red-600 hover:bg-red-700 shadow-lg shadow-red-900/50"
        >
          {startButtonText}
        </Button>

        {/* Security badges */}
        <div className="mt-8 flex items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldIcon className="h-4 w-4 text-green-500" />
            <span>256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <LockIcon className="h-4 w-4 text-blue-500" />
            <span>PCI Compliant</span>
          </div>
        </div>
      </section>

    </div>
  );
};