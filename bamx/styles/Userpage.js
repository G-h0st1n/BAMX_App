import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

"use strict";

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
    marginTop: moderateScale(10),
    color: "#78350F",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFAD8",
    padding: moderateScale(20),
  },
  errorText: {
    color: "#78350F",
    fontSize: scale(16),
    textAlign: "center",
    marginBottom: verticalScale(20),
  },
  logoutButton: {
    marginTop: verticalScale(20),
    padding: moderateScale(15),
    backgroundColor: "#FF6B6B",
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#22C55E",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(15),
    paddingHorizontal: moderateScale(20),
  },
  goBackButton: {
    position: "absolute",
    top: verticalScale(70),
    left: moderateScale(320),
    zIndex: 1,
  },
  goBackImg: {
    width: moderateScale(24),
    height: verticalScale(24),
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(15),
  },
  avatarContainer: {
    width: moderateScale(80),
    height: verticalScale(80),
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(20),
  },
  avatarSymbol: {
    fontSize: scale(32),
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize:scale(24),
    fontWeight: "bold",
    color: "white",
    marginBottom: verticalScale(4),
  },
  userUsername: {
    fontSize: scale(18),
    color: "white",
    opacity: 0.9,
    marginBottom: verticalScale(8),
  },
  roleBadge: {
    backgroundColor: "rgba(255,255,255,0.3)",
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(6),
    borderRadius: 16,
    alignSelf: "flex-start",
  },
  roleText: {
    fontSize: scale(14),
    color: "white",
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
    paddingBottom: verticalScale(140),
    paddingHorizontal: moderateScale(20),
    marginTop: verticalScale(-10),
  },
  contentContainer: {
    backgroundColor: "white",
    padding: moderateScale(20),
    borderRadius: 12,
    marginTop: verticalScale(10),
  },
  section: {
    marginBottom: verticalScale(25),
  },
  sectionTitle: {
    fontSize: scale(18),
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
    fontSize: scale(14),
    color: "#3F1D0B",
    fontWeight: "600",
  },
  privacySubtitle: {
    fontSize: scale(12),
    color: "#78350F",
    marginTop: verticalScale(4),
  },
  infoCard: {
    backgroundColor: "#FFC64A",
    padding: moderateScale(12),
    borderRadius: 8,
    marginBottom: verticalScale(8),
  },
  infoLabel: {
    fontSize: scale(12),
    color: "#3F1D0B",
    fontWeight: "600",
  },
  infoValue: {
    fontSize: scale(14),
    color: "#78350F",
    fontWeight: "bold",
  },
  userIdText: {
    fontSize: scale(12),
    color: "#78350F",
    fontWeight: "bold",
  },
  addressCard: {
    backgroundColor: "#FFC64A",
    padding: moderateScale(12),
    borderRadius: 8,
    marginBottom: verticalScale(8),
  },
  addressText: {
    fontSize: scale(14),
    color: "#78350F",
    fontWeight: "bold",
    textAlign: "left",
  }
});

module.exports = userpageStyle;