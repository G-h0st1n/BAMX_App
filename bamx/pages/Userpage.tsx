import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, Pressable, ScrollView, Switch } from "react-native";
import { auth, db } from '../App';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, where, getDoc, updateDoc, doc } from 'firebase/firestore';

// Importar estilos
var s = require('../styles/Userpage');

// Interface para los datos del usuario
interface UserData {
  name: string;
  last_name: string;
  mail: string;
  user: string;
  role: string;
  noLeaderboard?: boolean;
  anonymous?: boolean;
}


export default function Userpage({ navigation }: any) {
  const [loading, setLoading] = useState(true);
  const [noLeaderboard, setNoLeaderboard] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        await fetchUserData(user.uid);
      } else {
        setLoading(false);
        navigation.replace("Homepage");
      }
    });

    return unsubscribe;
  }, []);

  const fetchUserData = async (userId: string) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const data = userSnap.data() as UserData;
        setUserData(data);

        if (data.noLeaderboard !== undefined) setNoLeaderboard(data.noLeaderboard);
        if (data.anonymous !== undefined) setAnonymous(data.anonymous);
      } else {
        console.warn("No user document found for UID:", userId);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  const updatePrivacySetting = async (field: "noLeaderboard" | "anonymous", value: boolean) => {
    if (!currentUser) return;
    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, { [field]: value });
      if (field === "noLeaderboard") setNoLeaderboard(value);
      else setAnonymous(value);
    } catch (error) {
      console.error("Error updating privacy setting:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Homepage");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const getRoleSymbol = (rol: string) => {
    const symbols: { [key: string]: string } = {
      'voluntario': '🎗️',
      'admin': '👑',
      'usuario': '👤'
    };
    return symbols[rol] || '👤';
  };

  const getRoleDisplay = (rol: string) => {
    const roles: { [key: string]: string } = {
      'voluntario': 'Voluntario',
      'admin': 'Administrador',
      'usuario': 'Usuario Regular'
    };
    return roles[rol] || rol;
  };

  if (loading) {
    return (
      <View style={s.loadingContainer}>
        <ActivityIndicator size="large" color="#FFAF00" />
        <Text style={s.loadingText}>Cargando información...</Text>
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={s.errorContainer}>
        <Text style={s.errorText}>No se encontraron datos del usuario</Text>
        <Pressable onPress={handleLogout} style={s.logoutButton}>
          <Text style={s.logoutButtonText}>Cerrar Sesión</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={s.container}>
      {/* Header verde que ocupa toda la parte superior */}
      <View style={s.header}>
        {/* Botón de regreso */}
        <Pressable onPress={() => navigation.replace("Homepage")} style={s.goBackButton}>
          <Image
            source={require('../assets/goBack.png')}
            style={s.goBackImg}
          />
        </Pressable>

        <View style={s.headerContent}>
          <View style={s.avatarContainer}>
            <Text style={s.avatarSymbol}>{getRoleSymbol(userData.role)}</Text>
          </View>
          <View style={s.userInfo}>
            <Text style={s.userName}>
              {userData.name} {userData.last_name}
            </Text>
            <Text style={s.userUsername}>
              @{userData.name}
            </Text>
            <View style={s.roleBadge}>
              <Text style={s.roleText}>
                {getRoleDisplay(userData.role)}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Contenido principal */}
      <ScrollView style={s.scrollView}>
        <View style={s.contentContainer}>
          
          {/* Opción de Leaderboard */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Configuración de Leaderboard</Text>
            
            <View style={s.privacyContainer}>
              <View style={s.privacyTextContainer}>
                <Text style={s.privacyTitle}>No quiero aparecer en la leaderboard</Text>
                <Text style={s.privacySubtitle}>
                  {noLeaderboard ? 'Tu perfil no aparecerá en la leaderboard' : 'Tu perfil será visible'}
                </Text>
              </View>
              <Switch
                value={noLeaderboard}
                onValueChange={(value) => updatePrivacySetting("noLeaderboard", value)}
                trackColor={{ false: '#767577', true: '#5BB02F' }}
              />
            </View>
            <View style={[s.privacyContainer, { marginTop: 15 }]}>
              <View style={s.privacyTextContainer}>
                <Text style={s.privacyTitle}>Quiero aparecer anónimamente</Text>
                <Text style={s.privacySubtitle}>
                  {anonymous ? 'Tu nombre será oculto en la leaderboard' : 'Tu nombre se mostrará normalmente'}
                </Text>
              </View>
              <Switch
                  value={anonymous}
                  onValueChange={(value) => updatePrivacySetting("anonymous", value)}
                  trackColor={{ false: '#767577', true: '#5BB02F' }}
                  thumbColor={'#f4f3f4'}
              />
            </View>
          </View>

          {/* Información Personal */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Información Personal</Text>
            
            <View style={s.infoCard}>
              <Text style={s.infoLabel}>Nombre completo</Text>
              <Text style={s.infoValue}>
                {userData.name} {userData.last_name}
              </Text>
            </View>
            
            <View style={s.infoCard}>
              <Text style={s.infoLabel}>Correo electrónico</Text>
              <Text style={s.infoValue}>{userData.mail}</Text>
            </View>
          </View>

          {/* Información de Cuenta */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Información de Cuenta</Text>
            
            <View style={s.infoCard}>
              <Text style={s.infoLabel}>Username</Text>
              <Text style={s.infoValue}>@{userData.user}</Text>
            </View>
            
            <View style={s.infoCard}>
              <Text style={s.infoLabel}>User ID</Text>
              <Text style={s.userIdText}>{currentUser?.uid}</Text>
            </View>
          </View>

          {/* Botón de Cerrar Sesión */}
          <View style={s.section}>
            <Pressable 
              onPress={handleLogout}
              style={s.logoutButton}
            >
              <Text style={s.logoutButtonText}>Cerrar Sesión</Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}