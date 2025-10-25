'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from '@/lib/types/user';
import { Mail, Phone, Globe, MapPin, Building2 } from 'lucide-react';

interface UserInfoCardProps {
  user: User;
}

export function UserInfoCard({ user }: UserInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-x-3">
            <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-x-3">
            <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">{user.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-x-3">
            <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Website</p>
              <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                {user.website}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-x-3">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Address</p>
              <p className="text-sm text-muted-foreground">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-sm text-muted-foreground">
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-x-3">
            <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-medium">Company</p>
              <p className="text-sm text-muted-foreground">{user.company.name}</p>
              <p className="text-sm text-muted-foreground italic">{user.company.catchPhrase}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
