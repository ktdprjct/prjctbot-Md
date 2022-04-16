const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;ktdprjct;;;'
                    + 'FN:ktdprjct\n' // full name
                    + 'ORG:ktdprjct;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=62895342581895:+62 895-3425-81896\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'ktdprjct', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler