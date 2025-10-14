import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, Pressable, ScrollView, Switch } from "react-native";
import { auth, db } from '../App';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

// Importar estilos
var s = require('../styles/Userpage');

// Interface para los datos del usuario
interface UserData {
  nombre: string;
  apellido: string;
  correo: string;
  usuario: string;
}

// Datos predefinidos por nosotros
const predefinedData = {
  direccion: "Av. Principal #123, Col. Centro, CDMX, 06000",
  rol: "voluntario" // Puedes cambiar a 'admin' o 'usuario' según necesites
};

export default function Userpage({ navigation }: any) {
  const [loading, setLoading] = useState(true);
  const [isPublic, setIsPublic] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        await fetchUserData(user.uid);
      } else {
        setLoading(false);
        navigation.navigate("LogSign");
      }
    });

    return unsubscribe;
  }, []);

  const fetchUserData = async (userId: string) => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('uid', '==', userId));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const data = userDoc.data() as UserData;
        setUserData(data);
        
        // Cargar configuración de privacidad si existe
        const privacySetting = userDoc.data().isPublic;
        if (privacySetting !== undefined) {
          setIsPublic(privacySetting);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  const updatePrivacySetting = async (value: boolean) => {
    if (!currentUser) return;
    
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('uid', '==', currentUser.uid));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        await updateDoc(doc(db, 'users', userDoc.id), {
          isPublic: value
        });
        setIsPublic(value);
      }
    } catch (error) {
      console.error("Error updating privacy setting:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Homepage");
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
        <Pressable onPress={() => navigation.navigate("Homepage")} style={s.goBackButton}>
          <Image
            source={require('../assets/goBack.png')}
            style={s.goBackImg}
          />
        </Pressable>

        <View style={s.headerContent}>
          <View style={s.avatarContainer}>
            <Text style={s.avatarSymbol}>{getRoleSymbol(predefinedData.rol)}</Text>
          </View>
          <View style={s.userInfo}>
            <Text style={s.userName}>
              {userData.nombre} {userData.apellido}
            </Text>
            <Text style={s.userUsername}>
              @{userData.usuario}
            </Text>
            <View style={s.roleBadge}>
              <Text style={s.roleText}>
                {getRoleDisplay(predefinedData.rol)}
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
                <Text style={s.privacyTitle}>Mostrar en leaderboard público</Text>
                <Text style={s.privacySubtitle}>
                  {isPublic ? 'Tu perfil será visible' : 'Tu perfil será privado'}
                </Text>
              </View>
              <Switch
                value={isPublic}
                onValueChange={updatePrivacySetting}
                trackColor={{ false: '#767577', true: '#5BB02F' }}
                thumbColor={isPublic ? '#f4f3f4' : '#f4f3f4'}
              />
            </View>
          </View>

          {/* Información Personal */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Información Personal</Text>
            
            <View style={s.infoCard}>
              <Text style={s.infoLabel}>Nombre completo</Text>
              <Text style={s.infoValue}>
                {userData.nombre} {userData.apellido}
              </Text>
            </View>
            
            <View style={s.infoCard}>
              <Text style={s.infoLabel}>Correo electrónico</Text>
              <Text style={s.infoValue}>{userData.correo}</Text>
            </View>

            <View style={s.infoCard}>
              <Text style={s.infoLabel}>Rol</Text>
              <Text style={s.infoValue}>{getRoleDisplay(predefinedData.rol)}</Text>
            </View>
          </View>

          {/* Información de Cuenta */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Información de Cuenta</Text>
            
            <View style={s.infoCard}>
              <Text style={s.infoLabel}>Username</Text>
              <Text style={s.infoValue}>@{userData.usuario}</Text>
            </View>
            
            <View style={s.infoCard}>
              <Text style={s.infoLabel}>User ID</Text>
              <Text style={s.userIdText}>{currentUser?.uid}</Text>
            </View>
          </View>

          {/* Dirección (predefinida) */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Dirección</Text>
            
            <View style={s.addressCard}>
              <Text style={s.addressText}>
                {predefinedData.direccion}
              </Text>
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