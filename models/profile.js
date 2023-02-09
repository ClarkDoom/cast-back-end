import mongoose from 'mongoose'


const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  pronouns: {
    type: String,
    // enum: ['He/Him/His', 'She/Her/Hers', 'They/Them/Theirs']
  },
  isCd: Boolean,//true = cd, false = talent
  location: String,//where the user is based
  phoneNumber: String,
  email: String,
  website: String,
  talentAccount: { type: Schema.Types.ObjectId, ref: 'TalentAccount' },
  cdAccount: { type: Schema.Types.ObjectId, ref: 'CDAccount' }
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
