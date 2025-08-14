<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
  } from '$lib/components/ui/card/index.js';
  import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs/index.js';

  let { data } = $props();
  const errorMessage = data?.form?.message as string | undefined;
  const emailPrefill = (data?.form?.email as string | undefined) ?? '';
</script>

<section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
  <div class="mx-auto max-w-md">
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Sign in to your account or create a new one.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login">
          <TabsList class="grid grid-cols-2 w-full">
            <TabsTrigger value="login">Sign in</TabsTrigger>
            <TabsTrigger value="signup">Create account</TabsTrigger>
          </TabsList>

          <TabsContent value="login" class="mt-6">
            {#if errorMessage}
              <div class="mb-3 text-sm text-destructive">{errorMessage}</div>
            {/if}
            <form method="POST" action="?/login" class="space-y-4">
              <div class="space-y-2">
                <Label for="email-login">Email</Label>
                <Input id="email-login" name="email" type="email" required value={emailPrefill} autocomplete="email" />
              </div>
              <div class="space-y-2">
                <Label for="password-login">Password</Label>
                <Input id="password-login" name="password" type="password" required autocomplete="current-password" />
              </div>
              <Button type="submit" class="w-full">Sign in</Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" class="mt-6">
            {#if errorMessage}
              <div class="mb-3 text-sm text-destructive">{errorMessage}</div>
            {/if}
            <form method="POST" action="?/signup" class="space-y-4">
              <div class="space-y-2">
                <Label for="email-signup">Email</Label>
                <Input id="email-signup" name="email" type="email" required value={emailPrefill} autocomplete="email" />
              </div>
              <div class="space-y-2">
                <Label for="password-signup">Password</Label>
                <Input id="password-signup" name="password" type="password" required autocomplete="new-password" />
              </div>
              <Button type="submit" class="w-full">Create account</Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  </div>
  <div class="mx-auto max-w-md mt-4 text-center text-sm text-muted-foreground">
    By continuing, you agree to our <a href="#" class="underline hover:text-foreground">Terms</a> and
    <a href="#" class="underline hover:text-foreground">Privacy Policy</a>.
  </div>
</section>

