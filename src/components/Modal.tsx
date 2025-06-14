interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-40 overflow-y-auto py-12 px-4">
            <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 sm:p-10 mx-auto">
                {/* 閉じるボタン */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10"
                    aria-label="Close Modal"
                >
                    &times;
                </button>

                {/* コンテンツ */}
                <div className="mt-6">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
