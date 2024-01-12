export default async function fetcher<T>(url: string, options?: any): Promise<T> {
  const response = await fetch(url, {
    ...options,
    ...(options?.body && { body: JSON.stringify(options.body) }),
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
      "X-Device-Id": process.env.NEXT_PUBLIC_DEVICE_ID as string,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data;
}
