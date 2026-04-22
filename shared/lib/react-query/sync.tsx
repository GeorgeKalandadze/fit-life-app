import { focusManager, onlineManager } from '@tanstack/react-query';
import * as Network from 'expo-network';
import { useEffect } from 'react';
import { AppState, Platform, type AppStateStatus } from 'react-native';

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export function ReactQuerySync(): null {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    onlineManager.setEventListener((setOnline) => {
      let initialized = false;

      const networkSubscription = Network.addNetworkStateListener((state) => {
        initialized = true;
        setOnline(Boolean(state.isConnected));
      });

      Network.getNetworkStateAsync()
        .then((state) => {
          if (!initialized) {
            setOnline(Boolean(state.isConnected));
          }
        })
        .catch(() => {
          setOnline(true);
        });

      return () => networkSubscription.remove();
    });
  }, []);

  return null;
}
