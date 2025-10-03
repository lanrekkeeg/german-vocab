// src/components/MobileSidebar.tsx
import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const MobileSidebar = ({ isOpen, onClose, children }: MobileSidebarProps) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}
    <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-semibold">Menu</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg"><X size={20} /></button>
      </div>
      <div className="p-4 overflow-y-auto h-full">{children}</div>
    </div>
  </>
);