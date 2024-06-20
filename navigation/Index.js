import React from 'react';
import { useAuth } from '../hooks/useAuth';

import AuthStack from "./AuthStack";

export default function RootNavigation() {
    const { user } = useAuth();

    return user ? <AuthStack /> : <AuthStack />;
}
