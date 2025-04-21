export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          CollabBoard
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Un espace de travail collaboratif en temps réel. Créez, organisez et collaborez avec votre équipe.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
          >
            Commencer
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Découvrir
          </a>
        </div>
      </div>
    </main>
  );
}
