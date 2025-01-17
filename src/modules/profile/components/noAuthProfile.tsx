import { getTranslations } from "next-intl/server";

export const NoAuthProfile = async () => {
  const t = await getTranslations('settings');
  return (
    <div className="bg-white/10 shadow rounded-lg p-4 sm:p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-xl text-white sm:text-2xl font-bold mb-1">{t('title')}</h1>
          <p className="text-white">{t('subtitle')}</p>
        </div>
        <div className="space-y-2 w-full sm:w-64">
          <button className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center hover:bg-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mr-2"><path d="M20 12.183c0-.544-.044-1.09-.14-1.626H12.16v3.081h4.409a3.7 3.7 0 0 1-1.632 2.431v2h2.63c1.545-1.394 2.433-3.452 2.433-5.886Z" fill="#4285F4"></path><path d="M12.161 19.998c2.201 0 4.057-.708 5.41-1.93l-2.63-2c-.732.488-1.676.765-2.777.765-2.129 0-3.934-1.408-4.582-3.301H4.868v2.06c1.386 2.702 4.207 4.406 7.293 4.406Z" fill="#34A853"></path><path d="M7.58 13.533a4.702 4.702 0 0 1 0-3.063V8.409H4.867a7.865 7.865 0 0 0 0 7.184l2.711-2.06Z" fill="#FBBC04"></path><path d="M12.161 7.166a4.484 4.484 0 0 1 3.131 1.2l2.33-2.284A7.932 7.932 0 0 0 12.162 4C9.075 4 6.253 5.705 4.867 8.409l2.711 2.06c.645-1.895 2.453-3.303 4.582-3.303Z" fill="#EA4335"></path></svg>
            {t('loginWithGoogle')}
          </button>
          <div className="mt-4 sm:mt-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-blue_primary" />
              <span className="ml-2 text-sm text-white">{t('subscribeToNewsletter')}</span>
            </label>
            <p className="text-xs text-white mt-1">{t('agreementText')}</p>
          </div>
        </div>
      </div>
    </div>
  )
};