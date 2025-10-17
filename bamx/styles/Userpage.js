'use strict';

var React = require('react-native');

var userpageStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAD8",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFAD8",
  },
  loadingText: {
    marginTop: 10,
    color: "#78350F",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFAD8",
    padding: 20,
  },
  errorText: {
    color: "#78350F",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#FF6B6B",
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#22C55E",
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  goBackButton: {
    position: "absolute",
    top: 70,
    left: 320,
    zIndex: 1,
  },
  goBackImg: {
    width: 24,
    height: 24,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  avatarSymbol: {
    fontSize: 32,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  userUsername: {
    fontSize: 18,
    color: "white",
    opacity: 0.9,
    marginBottom: 8,
  },
  roleBadge: {
    backgroundColor: "rgba(255,255,255,0.3)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: "flex-start",
  },
  roleText: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
    paddingBottom: 140,
    paddingHorizontal: 20,
    marginTop: -10,
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#78350F",
    marginBottom: 12,
  },
  privacyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFC64A",
    padding: 15,
    borderRadius: 8,
  },
  privacyTextContainer: {
    flex: 1,
  },
  privacyTitle: {
    fontSize: 14,
    color: "#3F1D0B",
    fontWeight: "600",
  },
  privacySubtitle: {
    fontSize: 12,
    color: "#78350F",
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: "#FFC64A",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: "#3F1D0B",
    fontWeight: "600",
  },
  infoValue: {
    fontSize: 14,
    color: "#78350F",
    fontWeight: "bold",
  },
  userIdText: {
    fontSize: 12,
    color: "#78350F",
    fontWeight: "bold",
  },
  addressCard: {
    backgroundColor: "#FFC64A",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  addressText: {
    fontSize: 14,
    color: "#78350F",
    fontWeight: "bold",
    textAlign: "left",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerImage: {
    width: "100%",
    height: 120,
  }
});

module.exports = userpageStyle;