enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  YT = "Youtube",
  FaceB = "Facebook",
  INSTA = "Instagram"
}

const social = SocialMedia.INSTA;
console.log(social);
