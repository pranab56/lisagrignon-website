"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Zap } from 'lucide-react';
import { useState } from 'react';

interface Participant {
  id: string;
  name: string;
  date: string;
  status: string;
}

interface DrawHistoryEntry {
  id: string;
  winnerName: string;
  date: string;
}

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

const RaffleDrawSystem = () => {
  const [selectedRaffle, setSelectedRaffle] = useState<string>('summer');
  const [drawType, setDrawType] = useState<'single' | 'multiple'>('single');
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [showWinnerModal, setShowWinnerModal] = useState<boolean>(false);
  const [winner, setWinner] = useState<Participant | null>(null);
  const [rollingNames, setRollingNames] = useState<Participant[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  const participants: Participant[] = [
    { id: '#12345', name: 'Ethan Miller', date: '18/09/2025', status: 'Active' },
    { id: '#12346', name: 'Olivia Davis', date: '18/09/2025', status: 'Active' },
    { id: '#12347', name: 'Cameron Williamson', date: '18/09/2025', status: 'Active' },
    { id: '#12348', name: 'Sarah Johnson', date: '18/09/2025', status: 'Active' },
  ];

  const [drawHistory, setDrawHistory] = useState<DrawHistoryEntry[]>([
    { id: '#12345', winnerName: 'Cameron Williamson', date: '18/09/2025' },
    { id: '#12345', winnerName: 'Cameron Williamson', date: '18/09/2025' },
    { id: '#12345', winnerName: 'Cameron Williamson', date: '18/09/2025' },
  ]);

  const raffleData = {
    summer: {
      name: 'Summer Raffle',
      ticketsSold: '1,250',
      drawDate: 'July 15, 2025',
      prize: 'Luxury Vacation Package'
    },
    winter: {
      name: 'Winter Raffle',
      ticketsSold: '2,100',
      drawDate: 'December 20, 2025',
      prize: 'Winter Getaway Package'
    },
    spring: {
      name: 'Spring Raffle',
      ticketsSold: '1,800',
      drawDate: 'March 30, 2025',
      prize: 'Spring Adventure Package'
    }
  };

  const currentRaffle = raffleData[selectedRaffle as keyof typeof raffleData];

  const createParticles = () => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2
      });
    }
    setParticles(newParticles);
  };

  const runDraw = () => {
    setIsDrawing(true);
    setRollingNames([]);

    // Create slot machine effect with multiple rolling columns
    const columns = 5;
    const rollSpeed = 50;
    let rollCount = 0;
    const maxRolls = 60;

    const rollInterval = setInterval(() => {
      const newRolling: Participant[] = [];
      for (let i = 0; i < columns; i++) {
        const randomParticipant = participants[Math.floor(Math.random() * participants.length)];
        newRolling.push(randomParticipant);
      }
      setRollingNames(newRolling);
      rollCount++;

      if (rollCount >= maxRolls) {
        clearInterval(rollInterval);

        // Slow down effect
        setTimeout(() => {
          const finalWinner = participants[Math.floor(Math.random() * participants.length)];
          setWinner(finalWinner);
          setIsDrawing(false);
          createParticles();
          setShowWinnerModal(true);
          setRollingNames([]);

          const newHistoryEntry: DrawHistoryEntry = {
            id: finalWinner.id,
            winnerName: finalWinner.name,
            date: new Date().toLocaleDateString('en-GB')
          };
          setDrawHistory([newHistoryEntry, ...drawHistory]);
        }, 500);
      }
    }, rollSpeed);
  };

  const notifyWinner = () => {
    if (winner) {
      alert(`Winner ${winner.name} has been notified!`);
    }
  };

  const announceResult = () => {
    if (winner) {
      alert(`Result announced for ${winner.name}!`);
    }
  };

  const downloadReport = () => {
    alert('Downloading report...');
  };

  const redraw = () => {
    setShowWinnerModal(false);
    setWinner(null);
    setParticles([]);
    setTimeout(() => runDraw(), 300);
  };

  return (
    <div className="p-8 relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (Math.random() * 2 + 2) + 's'
            }}
          />
        ))}
      </div>

      <div className="w-full  mx-auto relative z-10">
        <div className="flex items-center justify-center w-full flex-col lg:flex-row gap-8">
          {/* Left Section - Raffle Info */}
          <div className="w-full h-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Section - Raffle Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-6">

                    <h2 className="text-xl font-bold text-gray-800">Raffle Info</h2>
                  </div>

                  <div className="mb-6">
                    <Select value={selectedRaffle} onValueChange={setSelectedRaffle}>
                      <SelectTrigger className="w-full p-3 bg-white  border-gray-300 rounded-lg text-gray-800 font-medium">
                        <SelectValue placeholder="Select a raffle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="summer">Summer Raffle</SelectItem>
                        <SelectItem value="winter">Winter Raffle</SelectItem>
                        <SelectItem value="spring">Spring Raffle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 ">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Tickets Sold:</span>
                      <span className="font-bold text-gray-800">{currentRaffle.ticketsSold}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Draw Date:</span>
                      <span className="font-medium text-gray-800">{currentRaffle.drawDate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Prize:</span>
                      <span className="font-medium text-gray-800">{currentRaffle.prize}</span>
                    </div>
                  </div>
                </div>

                {/* Right Section - Image */}
                <div className="flex-shrink-0 w-full md:w-56">
                  <div className="bg-gray-200 rounded-xl p-6 h-full flex items-center justify-center">
                    <div className="relative">
                      {/* Gift boxes illustration */}
                      <div className="flex gap-3 items-end">
                        {/* Blue box */}
                        <div className="relative">
                          <div className="w-16 h-20 bg-cyan-300 rounded-lg shadow-lg"></div>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
                          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200"></div>
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <div className="w-6 h-3 border-2 border-gray-200 border-b-0 rounded-t-full"></div>
                          </div>
                        </div>

                        {/* Pink box */}
                        <div className="relative">
                          <div className="w-14 h-16 bg-pink-300 rounded-lg shadow-lg"></div>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
                          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200"></div>
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <div className="w-5 h-2 border-2 border-gray-200 border-b-0 rounded-t-full"></div>
                          </div>
                        </div>

                        {/* Gray box */}
                        <div className="relative">
                          <div className="w-12 h-14 bg-gray-300 rounded-lg shadow-lg"></div>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
                          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200"></div>
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                            <div className="w-4 h-2 border-2 border-gray-200 border-b-0 rounded-t-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Draw Section */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl p-1 mb-8">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl font-bold">Draw Section</h2>
                </div>

                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setDrawType('single')}
                    className={`px-6 py-3 rounded-xl font-bold  ${drawType === 'single'
                      ? 'bg-yellow-50 font-medium'
                      : '  border border-gray-300'
                      }`}
                  >
                    Single Winner
                  </button>
                  <button
                    onClick={() => setDrawType('multiple')}
                    className={`px-6 py-3 rounded-xl font-medium ${drawType === 'multiple'
                      ? ' bg-yellow-50 font-medium'
                      : '  border border-gray-300'
                      }`}
                  >
                    Multiple Winner
                  </button>
                </div>

                {isDrawing && (
                  <div className="mb-6 p-8  relative overflow-hidden">


                    {/* Slot Machine Style Display */}
                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-black mb-2 animate-pulse drop-shadow-lg">
                          🎰 SPINNING 🎰
                        </div>
                        <div className="flex justify-center gap-2">
                          {[...Array(5)].map((_, i) => (
                            <Zap key={i} className="text-gray-400 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center gap-3 overflow-hidden">
                        {rollingNames.map((person, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-xl p-4 shadow-2xl border-2 border-[#00715D] min-w-[120px] animate-slot-roll"
                            style={{ animationDelay: `${index * 0.05}s` }}
                          >
                            <div className="text-lg font-bold text-[#00715D] text-center truncate">
                              {person.name.split(' ')[0]}
                            </div>
                            <div className="text-xs text-gray-400 text-center">{person.id}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Animated Border Effect */}
                    <div className="absolute inset-0 border-2 border-[#00715D] rounded-2xl animate-pulse-border"></div>
                  </div>
                )}

                <button
                  onClick={runDraw}
                  disabled={isDrawing}
                  className={`w-full py-3 cursor-pointer rounded-xl font-medium text-xl transition-all transform ${isDrawing
                    ? 'bg-yellow-500  cursor-not-allowed '
                    : 'bg-yellow-500  shadow-2xl'
                    }`}
                >
                  {isDrawing ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">🎲</span> SPINNING...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      RUN DRAW →
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Participant List */}
        <div className='flex flex-col lg:flex-row gap-5 h-[400px] items-stretch pt-5'>
          {/* Left Table */}
          <div className="w-full lg:w-1/2 h-full overflow-y-auto rounded-2xl p-1">
            <div className="bg-white rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Participant List</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F0F7F6]">
                      <th className="text-left py-3 px-4 text-gray-500 font-bold">ID</th>
                      <th className="text-left py-3 px-4 text-gray-500 font-bold">Name</th>
                      <th className="text-left py-3 px-4 text-gray-500 font-bold">Date</th>
                      <th className="text-left py-3 px-4 text-gray-500 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {participants.map((participant, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 text-black">
                        <td className="py-3 px-4">{participant.id}</td>
                        <td className="py-3 px-4 font-medium">{participant.name}</td>
                        <td className="py-3 px-4">{participant.date}</td>
                        <td className="py-3 px-4">
                          <span className="px-3 py-1 text-[#00715D] rounded text-sm font-medium bg-[#F0F7F6]">
                            {participant.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Table */}
          <div className="w-full lg:w-1/2 h-full overflow-y-auto rounded-2xl p-1">
            <div className="bg-white rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Draw History</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F0F7F6]">
                      <th className="text-left py-3 px-4 text-gray-500 font-bold">ID</th>
                      <th className="text-left py-3 px-4 text-gray-500 font-bold">Winner Name</th>
                      <th className="text-left py-3 px-4 text-gray-500 font-bold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drawHistory.map((entry, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 text-black">
                        <td className="py-3 px-4">{entry.id}</td>
                        <td className="py-3 px-4 font-medium">{entry.winnerName}</td>
                        <td className="py-3 px-4">{entry.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winner Modal */}
      {showWinnerModal && winner && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          {/* Confetti Particles */}
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute w-3 h-3 bg-[#FFC107] rounded-full animate-confetti"
              style={{
                left: particle.left + '%',
                animationDelay: particle.delay + 's',
                animationDuration: particle.duration + 's'
              }}
            />
          ))}

          <div className=" rounded-xl p-2 animate-winner-pop relative">
            <div className="bg-white rounded-xl p-8 relative">
              <button
                onClick={() => setShowWinnerModal(false)}
                className="absolute top-4 right-4 text-gray-400 cursor-pointer  hover:text-white transition-colors z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <div className="text-5xl font-medium mb-4 bg-[#00715D] bg-clip-text text-transparent animate-pulse">
                  🏆 WINNER! 🏆
                </div>

                <div className="mb-6">
                  <div className="w-32 h-32 bg-[#FFC107] rounded-full mx-auto mb-4 flex items-center justify-center animate-bounce shadow-2xl shadow-gray-500/50">
                    <span className="text-6xl">🎉</span>
                  </div>
                  <h3 className="text-3xl font-black text-[#00715D] mb-2 drop-shadow-lg">{winner.name}</h3>
                  <p className="text-gray-600 font-bold">
                    ID:{winner.id} / June 22, 2025 / Paid
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={notifyWinner}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600  hover:to-blue-500 text-white font-bold rounded-xl transition-all transform  shadow-lg hover:duration-150 cursor-pointer"
                  >
                    📧 Notify Winner
                  </button>
                  <button
                    onClick={announceResult}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 hover:to-green-500 text-white font-bold rounded-xl transition-all transform hover:duration-150 cursor-pointer"
                  >
                    📢 Announce Result
                  </button>
                  <button
                    onClick={downloadReport}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-purple-600  hover:to-purple-500 text-white font-bold rounded-xl transition-all transform hover:duration-150 cursor-pointer"
                  >
                    📥 Download Report
                  </button>
                  <button
                    onClick={redraw}
                    className="w-full py-4 bg-gray-700 hover:bg-gray-600 text-red-400 font-bold rounded-xl transition-all transform shadow-lg hover:duration-150 cursor-pointer"
                  >
                    🔄 Redraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slot-roll {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes winner-pop {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes pulse-border {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-twinkle { animation: twinkle 3s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slot-roll { animation: slot-roll 0.1s ease-out; }
        .animate-winner-pop { animation: winner-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
        .animate-confetti { animation: confetti 3s linear infinite; }
        .animate-pulse-border { animation: pulse-border 1s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default RaffleDrawSystem;