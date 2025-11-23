import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const fontData = await readFile(join(process.cwd(), 'public/static/font/NeuzeitGrotesk-Bold.woff'));
  const avatarData = await readFile(join(process.cwd(), 'public/avatar.png'));
  const avatarBase64 = `data:image/png;base64,${avatarData.toString('base64')}`;

  return new ImageResponse(
      (
          <div
              style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  backgroundColor: '#08070b',
                  padding: '60px 120px',
                  fontFamily: 'Neuzeit Grotesk Bold',
              }}
          >
              <div
                  style={{
                      position: 'absolute',
                      top: 60,
                      right: 120,
                      fontSize: 28,
                      color: '#f2f2f2',
                      fontWeight: 'bold',
                  }}
              >
                  MA
              </div>
              <div
                  style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '40px',
                      marginTop: '-60px',
                  }}
              >
                  <img
                      src={avatarBase64}
                      width={120}
                      height={120}
                      style={{
                          borderRadius: '12px',
                          filter: 'grayscale(100%)',
                      }}
                  />
                  <h1
                      style={{
                          fontSize: 72,
                          fontWeight: 'bold',
                          letterSpacing: '-0.02em',
                          margin: 0,
                          lineHeight: 1.2,
                          display: 'flex',
                          gap: '20px',
                      }}
                  >
                      <span
                          style={{
                              backgroundImage: 'linear-gradient(135deg, #ff80bf 0%, #9580ff 100%)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              color: 'transparent',
                          }}
                      >
                          Podcasts
                      </span>
                      <span style={{ color: '#f2f2f2' }}>|</span>
                      <span style={{ color: '#f2f2f2' }}>Mickaël Alves</span>
                  </h1>
              </div>
              <div
                  style={{
                      position: 'absolute',
                      bottom: 60,
                      left: 120,
                      fontSize: 28,
                      color: '#8f9ba8',
                      fontWeight: 'normal',
                  }}
              >
                  cruuzazul.dev
              </div>
              <div
                  style={{
                      position: 'absolute',
                      bottom: 60,
                      right: 120,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                  }}
              >
                  <span
                      style={{
                          fontSize: 28,
                          color: '#8f9ba8',
                          fontWeight: 'normal',
                          lineHeight: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          paddingTop: '6px',
                      }}
                  >
                      CruuzAzul
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', height: '24px' }}>
                      <svg width="24" height="22" viewBox="0 0 256 226" fill="#8f9ba8">
                          <path d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172Z" />
                      </svg>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', height: '24px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#8f9ba8">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', height: '24px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#8f9ba8">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                  </div>
              </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Neuzeit Grotesk Bold',
                    data: fontData,
                    style: 'normal',
                    weight: 700,
                },
            ],
        }
    );
}
