import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function VideoModal({
  videoUrl,
  driveUrl,
  onClose,
}: {
  videoUrl?: string | null;
  driveUrl?: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 16, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 12, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-end p-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full w-10 h-10 border border-white/20 text-white/95 hover:bg-white/5"
              aria-label="Close video"
            >
              <FiX />
            </button>
          </div>

          <div className="p-4 bg-black">
            {videoUrl ? (
              // Use native video player for hosted mp4/webm files
              <video src={videoUrl} controls autoPlay style={{ width: "100%", maxHeight: "70vh" }} />
            ) : (
              <div className="text-center p-8 text-white">
                <p className="mb-4">No hosted demo found.</p>
                {driveUrl ? (
                  <a
                    href={driveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-white text-slate-900 rounded-lg font-semibold"
                  >
                    Open Demo on Google Drive
                  </a>
                ) : (
                  <p className="text-sm text-white/70">Provide a `videoUrl` or `driveUrl` to enable demo playback.</p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
