# Email Setup Guide - Web3Forms

This guide will help you set up Web3Forms to send automated emails from your contact form.

## Why Web3Forms?

- ✅ **100% FREE** - No credit card required, no hidden fees
- ✅ **No Signup Required** - Just enter your email and get an access key
- ✅ **250 submissions/month free** - More than enough for most websites
- ✅ **Built-in Spam Protection** - Automatic spam filtering
- ✅ **Auto-responder** - Sends automated replies to users
- ✅ **Real-time** - Emails sent instantly

## Step 1: Get Your Access Key (Takes 30 seconds!)

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address (where you want to receive form submissions)
3. Click **"Get Your Access Key"**
4. Copy the access key that appears (it's a long string like `abc123-def456-ghi789...`)
5. **Important:** Check your email and click the verification link to activate the key

## Step 2: Configure Environment Variables

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
VITE_OWNER_EMAIL=your-email@gmail.com
```

**Example:**
```env
VITE_WEB3FORMS_ACCESS_KEY=abc123-def456-ghi789-xyz
VITE_OWNER_EMAIL=hello@buildoholics.com
```

3. Replace `your_access_key_here` with the access key you got from Web3Forms
4. Replace `your-email@gmail.com` with your actual email address

## Step 3: Customize Automated Message

1. Open `src/config/emailConfig.ts`
2. Find the `automatedMessage` field (around line 25)
3. Replace it with your custom message

**Example:**
```typescript
automatedMessage: `Thank you for contacting Buildoholics!

We've received your message and will get back to you within 24 hours on business days.

Best regards,
The Buildoholics Team`,
```

## Step 4: Restart Your Development Server

After adding environment variables, you need to restart your dev server:

1. Stop your current server (Ctrl+C)
2. Run `npm run dev` again
3. Environment variables are now loaded

## Step 5: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form with your email address
4. Check that:
   - ✅ You receive an email notification with the form submission
   - ✅ The user receives an automated response email

## How It Works

When someone submits the contact form:

1. **Email to You**: You receive an email with:
   - Sender's name
   - Sender's email
   - Company (if provided)
   - Their message
   - Subject: "New Contact Form Submission - Buildoholics"

2. **Automated Email to User**: The user receives an automated email with:
   - A thank you message (customizable in `emailConfig.ts`)
   - Subject: "Thank you for contacting Buildoholics!"

## Troubleshooting

### Emails not sending?

- **Check your access key**: Make sure it's correct in your `.env` file
- **Verify email**: Make sure you clicked the verification link in your email
- **Check spam folder**: Sometimes emails go to spam initially
- **Restart server**: Environment variables only load when server starts

### "Invalid access key" error?

- Make sure you copied the entire access key (it's long!)
- Verify that you clicked the activation link in your email
- Check for extra spaces in your `.env` file

### User not receiving automated response?

- The automated message is configured in `src/config/emailConfig.ts`
- Check the `automatedMessage` field
- Make sure the user's email address is valid

### Form submitting but no emails?

- Check your browser console for errors
- Verify your `.env` file is in the root directory (same level as `package.json`)
- Make sure you restarted the dev server after adding environment variables

## Security Notes

- ✅ Your access key is safe to use in frontend code (designed for that)
- ✅ Never commit your `.env` file to version control
- ✅ The `.env` file should already be in `.gitignore`
- ✅ Web3Forms has built-in spam protection

## Free Tier Limits

- **250 submissions per month** - Free tier
- More than enough for most websites
- If you need more, you can upgrade (but free tier is usually sufficient)

## Need Help?

- Web3Forms Documentation: https://docs.web3forms.com/
- Web3Forms Support: https://web3forms.com/#support

## Next Steps

1. ✅ Get your access key from web3forms.com
2. ✅ Add it to your `.env` file
3. ✅ Customize the automated message
4. ✅ Test the form
5. ✅ Deploy and enjoy! 🚀
