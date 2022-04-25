import { Fragment, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { GoogleIcon } from '../icons';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { AppContext } from '../../context/authentication';

export default function SignInModal() {
  const authModal = useContext(AppContext);

  return (
    <Dialog
      as='div'
      className='fixed z-10 inset-0 overflow-y-auto'
      onClose={() => authModal.setOpenAuthModal(false)}
      open={authModal.openAuthModal}
    >
      <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <Transition
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          show={authModal.openAuthModal}
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>
        <Transition
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          enterTo='opacity-100 translate-y-0 sm:scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 translate-y-0 sm:scale-100'
          leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          show={authModal.openAuthModal}
        >
          <div className='relative inline-block align-bottom bg-white min-w-full rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
            <div className='mx-auto mb-4 w-full max-w-sm lg:w-96'>
              <div>
                <h2 className='text-2xl font-extrabold text-gray-900'>
                  Sign in to your account
                </h2>
              </div>
            </div>
            <div>
              <div>
                <div
                  className='mt-1 grid grid-cols-1 gap-3'
                  onClick={() =>
                    Auth.federatedSignIn({
                      provider: CognitoHostedUIIdentityProvider.Google,
                    })
                  }
                >
                  <div>
                    <div className='w-full space-x-2 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white font-medium text-gray-500 hover:bg-gray-50'>
                      <div>
                        <GoogleIcon />
                      </div>
                      <div>
                        <span className=''>Continue with Google</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Dialog>
  );
}
